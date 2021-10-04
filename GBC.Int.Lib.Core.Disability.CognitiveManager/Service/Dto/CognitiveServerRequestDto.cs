using System;
using System.Collections.Generic;
using System.Text;

namespace GBC.Int.Lib.Core.Disability.CognitiveManager.Service.Dto
{
    public class CognitiveServerRequestDto
    {
        public string CognitiveServiceId { get; set; }
        public string ServerName { get; set; }
        public string DatabaseName { get; set; }
        public string MethodName { get; set; }
    }
}
