using System;
using System.Collections.Generic;

namespace GBC.Int.Lib.Core.Disability.CognitiveManager.Persistence.Entities.Dao
{
    public partial class CognitivePlatformEntity
    {
        public CognitivePlatformEntity()
        {
            CognitiveT = new HashSet<CognitiveEntity>();
        }

        public int PlatformId { get; set; }
        public string PlatformName { get; set; }
        public bool Status { get; set; }
        public DateTime? CreatedTimeStamp { get; set; }
        public DateTime? LastUpdatedTimeStamp { get; set; }
        public string CreatedUserId { get; set; }
        public string UpdatedUserId { get; set; }

        public virtual ICollection<CognitiveEntity> CognitiveT { get; set; }
    }
}
