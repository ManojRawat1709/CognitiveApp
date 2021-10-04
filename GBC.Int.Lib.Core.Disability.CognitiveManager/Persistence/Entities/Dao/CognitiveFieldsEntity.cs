using System;

namespace GBC.Int.Lib.Core.Disability.CognitiveManager.Persistence.Entities.Dao
{
    public partial class CognitiveFieldsEntity
    {
        public int FieldId { get; set; }
        public string FieldAssociationId { get; set; }
        public string FieldName { get; set; }
        public string Direction { get; set; }
        public bool Status { get; set; }
        public DateTime? CreatedTimeStamp { get; set; }
        public DateTime? LastUpdatedTimeStamp { get; set; }
        public string CreatedUserId { get; set; }
        public string LastUpdatedUserId { get; set; }
        public bool IsNullable { get; set; }
    }
}
