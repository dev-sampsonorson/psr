using System.Text.Json;
using System.Text.Json.Serialization;
using PSR.Domain;
using PSR.SharedKernel;
using PSR.Application.Exceptions;

namespace PSR.Api.Converters
{
    public class CountryJsonConverter : JsonConverter<Country>
    {
        public override Country Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            try {
                int countryId = 0;
                if (reader.TokenType == JsonTokenType.Number) {
                    countryId = reader.GetInt32();
                } else if (reader.TokenType == JsonTokenType.String) {
                    countryId = Convert.ToInt32(reader.GetString());
                }
                
                return Enumeration.FromValue<Country>(countryId);
            } catch(Exception) { }

            throw new JsonFormatException(nameof(Country));
        }

        public override void Write(Utf8JsonWriter writer, Country value, JsonSerializerOptions options)
        {
            writer.WriteNumberValue(value.Id);
        }
    }
}