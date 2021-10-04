
using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;

namespace GBC.Int.Lib.Core.Disability.CognitiveManager.Service.Dto
{
    public class CognitiveRequestDto
    {
        public string CognitiveServiceId { get; set; }
        public string Platform { get; set; }
        public string ContentType { get; set; }
    }
}
