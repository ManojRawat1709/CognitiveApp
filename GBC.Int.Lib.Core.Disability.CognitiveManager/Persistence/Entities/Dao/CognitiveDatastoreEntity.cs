using System;

namespace GBC.Int.Lib.Core.Disability.CognitiveManager.Persistence.Entities.Dao
{
    public partial class CognitiveDatastoreEntity
    {
        public int DatastoreId { get; set; }
        public string CognitiveServiceId { get; set; }
        public string ServerName { get; set; }
        public string DatabaseName { get; set; }
        public string MethodName { get; set; }
        public DateTime? CreatedTimeStamp { get; set; }
        public DateTime? LastUpdatedTimeStamp { get; set; }
        public string CreatedUserId { get; set; }
        public string LastUpdatedUserId { get; set; }

        public virtual CognitiveEntity CognitiveService { get; set; }
    }
}
