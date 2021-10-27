using System.Text.Json;
using System.Text.Json.Serialization;
using PSR.Domain;
using PSR.SharedKernel;
using PSR.Application.Exceptions;
using PSR.Application.Common.Exceptions;

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
            } catch(InvalidOperationException) {
                return Country.Empty;
            } catch(FormatException) {
                throw new RequestFormatException(nameof(Country));
            } catch(Exception) {}

            // throw new RequestFormatException(nameof(Country));
            return Country.Empty;
        }

        public override void Write(Utf8JsonWriter writer, Country value, JsonSerializerOptions options)
        {
            writer.WriteNumberValue(value.Id);
        }
    }
}