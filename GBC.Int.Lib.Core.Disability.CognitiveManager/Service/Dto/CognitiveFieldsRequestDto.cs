using System;
using System.Collections.Generic;
using System.Text;

namespace GBC.Int.Lib.Core.Disability.CognitiveManager.Service.Dto
{
    public class CognitiveFieldsRequestDto
    {
        public string FieldName { get; set; }
        public string Direction { get; set; }
        public string Status { get; set; }
        public string FieldAssociationId { get; set; }
    }
}
