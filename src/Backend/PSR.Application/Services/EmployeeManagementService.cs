using AutoMapper;
using System.Linq;
using PSR.Application.Interfaces;
using PSR.Application.Models.Request;
using PSR.Application.Models.Response;
using PSR.Application.Repository;
using PSR.Domain;
using PSR.SharedKernel.Exceptions;

namespace PSR.Application.Services
{
    public class EmployeeManagementService : IEmployeeManagementService
    {
        private readonly IEmployeeRepository _employeeRepository;
        private readonly ISkillRepository _skillRepository;
        private readonly IMapper _mapper;
        
        public EmployeeManagementService(
            IEmployeeRepository employeeRepository,
            ISkillRepository skillRepository,
            IMapper mapper
            )
        {
            ArgumentNullException.ThrowIfNull(employeeRepository, nameof(employeeRepository));
            ArgumentNullException.ThrowIfNull(skillRepository, nameof(skillRepository));
            ArgumentNullException.ThrowIfNull(mapper, nameof(mapper));

            _employeeRepository = employeeRepository;
            _skillRepository = skillRepository;
            _mapper = mapper;
        }

        public async Task<AddEmployeeSkillRatingRes> AddSkillRatingToEmployee(AddEmployeeSkillRatingReq request)
        {
            if (await _employeeRepository.CheckSkillExists(request.EmployeeId, request.SkillId)) {
                throw new DuplicateItemException("Skill already exists for this employee");
            }

            using (var uow = _employeeRepository.UnitOfWork) {
                // Get employee 
                var employee = await _employeeRepository.GetByIdAsync(request.EmployeeId);
    
                // Get skill
                var skill = await _skillRepository.GetByIdAsync(request.SkillId);
                
                employee.SkillRatings.Add(new SkillRating {
                    Skill = skill,
                    Rating = request.Rating
                });    
    
                await uow.SaveEntitiesAsync();

                return _mapper.Map<Employee, AddEmployeeSkillRatingRes>(employee);
            }
        }

        public async Task<UpdateEmployeeSkillRatingRes> UpdateSkillRatingToEmployee(UpdateEmployeeSkillRatingReq request)
        {
            using (var uow = _employeeRepository.UnitOfWork) {
                // Get employee 
                var employee = await _employeeRepository.GetByIdAsync(request.EmployeeId);

                // Get skill rating
                var skillRating = employee.SkillRatings.FirstOrDefault(x => x.Skill.Id == request.SkillId);
                if (skillRating is null)
                    throw new EntityNotFoundException($"Skill with id {request.SkillId} not found");

                // Update skill rating
                skillRating.Rating = request.Rating;
    
                await uow.SaveEntitiesAsync();

                // Dispatch events here

                return _mapper.Map<Employee, UpdateEmployeeSkillRatingRes>(employee);
            }
        }

        public async Task<SkillRatingRes> AddSkillRating(Guid employeeId, Guid skillId, double rating)
        {
            if (await _employeeRepository.CheckSkillExists(employeeId, skillId)) {
                throw new DuplicateItemException("Skill already exists for this employee");
            }

            using (var uow = _employeeRepository.UnitOfWork) {
                // Get employee 
                var employee = await _employeeRepository.GetByIdAsync(employeeId);
    
                // Get skill
                var skill = await _skillRepository.GetByIdAsync(skillId);

                var newSkillRating = new SkillRating {
                    Skill = skill,
                    Rating = rating
                };
                
                employee.SkillRatings.Add(newSkillRating);    
    
                await uow.SaveEntitiesAsync();

                return _mapper.Map<SkillRating, SkillRatingRes>(newSkillRating);
            }
        }

        public async Task<SkillRatingRes> UpdateSkillRating(Guid employeeId, Guid skillId, double rating)
        {
            using (var uow = _employeeRepository.UnitOfWork) {
                // Get employee 
                var employee = await _employeeRepository.GetByIdAsync(employeeId);

                // Get skill rating
                var skillRating = employee.SkillRatings.FirstOrDefault(x => x.Skill.Id == skillId);
                if (skillRating is null)
                    throw new EntityNotFoundException($"Skill with id {skillId} not found");

                // Update skill rating
                skillRating.Rating = rating;
    
                await uow.SaveEntitiesAsync();

                // Dispatch events here

                return _mapper.Map<SkillRating, SkillRatingRes>(skillRating);
            }
        }

        public async Task<bool> IsRatingAssigned(Guid employeeId, Guid skillId) {
            var rating = await _employeeRepository.GetSkillRatingAsync(employeeId, skillId);
            
            return rating is not null;
        }

        public async Task<(IEnumerable<EmployeeRes> Employees, long TotalRecords)> GetEmployees(int page, int pageSize) {
            var response = await _employeeRepository.ListAsync(page, pageSize, x => x.FirstName);

            return (_mapper.Map<IEnumerable<Employee>, IEnumerable<EmployeeRes>>(response.Result), response.TotalRecords);
        }

        public async Task<IEnumerable<SkillRatingRes>> GetSkillRatingsAsync(Guid employeeId) {
            var response = await _employeeRepository.GetSkillRatingsAsync(employeeId);

            return _mapper.Map<IEnumerable<SkillRating>, IEnumerable<SkillRatingRes>>(response);
        }

        public async Task<IEnumerable<SkillRatingRes>> GetSkillRatingsAsync(Guid categoryId, Guid subcategoryId, Guid employeeId) {
            var response = await _employeeRepository.GetSkillRatingsAsync(categoryId, subcategoryId, employeeId);

            return _mapper.Map<IEnumerable<SkillRating>, IEnumerable<SkillRatingRes>>(response);
        }
    }
}