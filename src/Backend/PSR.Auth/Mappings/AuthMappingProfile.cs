using System.Reflection;
using AutoMapper;
using PSR.Application.Common.Mappings;
using PSR.Auth.Domain;
using PSR.Auth.Models.Response;
using PSR.Domain;
using PSR.SharedKernel.Extensions;

namespace PSR.Auth.Mappings
{
    public class AuthMappingProfile : Profile
    {
        public AuthMappingProfile()
        {
            ApplyMappingsFromAssembly(Assembly.GetExecutingAssembly());
            
            CreateMap<ApplicationUser, UserRes>();
            CreateMap<Employee, UserRes>()
                .ForMember(dest => dest.EmployeeId, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.Id, opt => opt.Ignore());
            
            CreateMap<ApplicationUser, UserRegistrationRes>();
            CreateMap<Employee, UserRegistrationRes>()
                .ForMember(dest => dest.EmployeeId, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.Id, opt => opt.Ignore());
            CreateMap<AuthRes, UserRegistrationRes>();
            
            CreateMap<ApplicationUser, UserAuthRes>();
            CreateMap<Employee, UserAuthRes>()
                .ForMember(dest => dest.EmployeeId, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.Id, opt => opt.Ignore());
            CreateMap<AuthRes, UserAuthRes>();
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