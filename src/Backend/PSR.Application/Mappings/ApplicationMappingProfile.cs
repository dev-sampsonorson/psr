using System.Reflection;
using AutoMapper;
using PSR.Application.Common.Mappings;
using PSR.Application.Models.Request;
using PSR.Application.Models.Response;
using PSR.Domain;

namespace PSR.Application.Mappings
{
    public class ApplicationMappingProfile : Profile
    {
        public ApplicationMappingProfile()
        {
            ApplyMappingsFromAssembly(Assembly.GetExecutingAssembly());
            
            CreateMap<Skill, AddSkillReq>()
                .ReverseMap()
                .ForMember(dest => dest.Category, opt => opt.Ignore())
                .ForMember(dest => dest.SubCategory, opt => opt.Ignore());
            CreateMap<Skill, AddSkillRes>()
                .ForMember(dest => dest.CategoryName, opt => opt.MapFrom(src => src.Category.Name))
                .ForMember(dest => dest.SubCategoryName, opt => opt.MapFrom(src => src.SubCategory.Name));
            CreateMap<Skill, SkillRes>()
                .ForMember(dest => dest.CategoryName, opt => opt.MapFrom(src => src.Category.Name))
                .ForMember(dest => dest.SubCategoryName, opt => opt.MapFrom(src => src.SubCategory.Name))
                .ForMember(dest => dest.Employees, opt => opt.Ignore())
                .ForMember(dest => dest.TeamCompetency, opt => opt.Ignore());
            CreateMap<SkillRating, SkillRatingRes>()
                .ForMember(dest => dest.SkillId, opt => opt.MapFrom(src => src.Skill.Id))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Skill.Name))
                .ForMember(dest => dest.Slug, opt => opt.MapFrom(src => src.Skill.Slug))
                .ForMember(dest => dest.CategoryId, opt => opt.MapFrom(src => src.Skill.CategoryId))
                .ForMember(dest => dest.CategoryName, opt => opt.MapFrom(src => src.Skill.Category.Name))
                .ForMember(dest => dest.SubCategoryId, opt => opt.MapFrom(src => src.Skill.SubCategoryId))
                .ForMember(dest => dest.SubCategoryName, opt => opt.MapFrom(src => src.Skill.SubCategory.Name));

            CreateMap<SkillCategory, AddSkillCategoryReq>().ReverseMap();
            CreateMap<SkillCategory, AddSkillCategoryRes>();

            CreateMap<SkillCategory, SkillCategoryRes>().ReverseMap();
            CreateMap<SkillSubCategory, SkillSubCategoryRes>()
                .ForMember(dest => dest.CategoryName, opt => opt.MapFrom(src => src.Category.Name))
                .ReverseMap()
                .ForMember(dest => dest.Category, opt => opt.MapFrom(src => new SkillCategory {
                        Id = src.CategoryId,
                        Name = src.CategoryName
                    })
                );

            CreateMap<SkillSubCategory, AddSkillSubCategoryReq>()
                .ReverseMap()
                .ForMember(dest => dest.Category, opt => opt.Ignore());
            CreateMap<SkillSubCategory, AddSkillSubCategoryRes>()
                .ForMember(dest => dest.CategoryName, opt => opt.MapFrom(src => src.Category.Name));

            CreateMap<Employee, EmployeeRes>()
                .ForMember(dest => dest.CountryId, opt => opt.MapFrom(src => src.Country.Id))
                .ForMember(dest => dest.CountryName, opt => opt.MapFrom(src => src.Country.Name))
                .ForMember(dest => dest.StatusId, opt => opt.MapFrom(src => src.Status.Id))
                .ForMember(dest => dest.StatusName, opt => opt.MapFrom(src => src.Status.Name))
                .ForMember(dest => dest.Skills, opt => opt.MapFrom(src => src.SkillRatings));

            CreateMap<Employee, AddSkillToEmployeeRes>()
                .ForMember(dest => dest.CountryId, opt => opt.MapFrom(src => src.Country.Id))
                .ForMember(dest => dest.CountryName, opt => opt.MapFrom(src => src.Country.Name))
                .ForMember(dest => dest.StatusId, opt => opt.MapFrom(src => src.Status.Id))
                .ForMember(dest => dest.StatusName, opt => opt.MapFrom(src => src.Status.Name))
                .ForMember(dest => dest.Skills, opt => opt.MapFrom(src => src.SkillRatings));

            CreateMap<Employee, UpdateEmployeeSkillRatingRes>()
                .ForMember(dest => dest.CountryId, opt => opt.MapFrom(src => src.Country.Id))
                .ForMember(dest => dest.CountryName, opt => opt.MapFrom(src => src.Country.Name))
                .ForMember(dest => dest.StatusId, opt => opt.MapFrom(src => src.Status.Id))
                .ForMember(dest => dest.StatusName, opt => opt.MapFrom(src => src.Status.Name))
                .ForMember(dest => dest.Skills, opt => opt.MapFrom(src => src.SkillRatings));

        }

        private void ApplyMappingsFromAssembly(Assembly assembly)
        {
            var types = assembly.GetExportedTypes()
                .Where(t => t.GetInterfaces().Any(i =>
                    i.IsGenericType &&
                    i.GetGenericTypeDefinition() == typeof(IMapFrom<>)))
                .ToList();

            foreach (var type in types)
            {
                var method = type.GetMethod("Mapping") ??
                             type.GetInterface("IMapFrom`1")!
                                .GetMethod("Mapping");

                var instance = Activator.CreateInstance(type);

                method?.Invoke(instance, new object[] { this });
            }
        }
    }
}