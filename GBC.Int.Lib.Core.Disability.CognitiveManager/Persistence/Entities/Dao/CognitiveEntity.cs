using System;
using System.Collections.Generic;

namespace GBC.Int.Lib.Core.Disability.CognitiveManager.Persistence.Entities.Dao
{
    public partial class CognitiveEntity
    {
        public CognitiveEntity()
        {
            CognitiveDatastoreT = new HashSet<CognitiveDatastoreEntity>();
        }

        public string CognitiveServiceId { get; set; }
        public int? PlatformId { get; set; }
        public string ContentType { get; set; }
        public DateTime? CreatedTimeStamp { get; set; }
        public DateTime? LastUpdatedTimeStamp { get; set; }
        public string CreatedUserId { get; set; }
        public string LastUpdatedUserId { get; set; }

        public virtual CognitivePlatformEntity Platform { get; set; }
        public virtual ICollection<CognitiveDatastoreEntity> CognitiveDatastoreT { get; set; }
    }
}
