using AutoMapper;
using System.Linq;
using PSR.Application.Interfaces;
using PSR.Application.Models.Request;
using PSR.Application.Models.Response;
using PSR.Application.Repository;
using PSR.Domain;
using PSR.SharedKernel;

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

        public async Task<AddSkillToEmployeeRes> AddSkillRatingToEmployee(AddSkillToEmployeeReq request)
        {
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

                return _mapper.Map<Employee, AddSkillToEmployeeRes>(employee);
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

                return _mapper.Map<Employee, UpdateEmployeeSkillRatingRes>(employee);
            }
        }

        public async Task<(IEnumerable<EmployeeRes> Employees, long TotalRecords)> GetEmployees(int page, int pageSize) {
            var response = await _employeeRepository.ListAsync(page, pageSize, x => x.FirstName);

            return (_mapper.Map<IEnumerable<Employee>, IEnumerable<EmployeeRes>>(response.Result), response.TotalRecords);
        }
    }
}