using GBC.Int.Lib.Core.Disability.CognitiveManager.Persistence.Entities.Dao;
using GBC.Int.Lib.Core.Disability.CognitiveManager.Service.Dto;
using System;
using System.Collections.Generic;
using System.Linq;

namespace GBC.Int.Lib.Core.Disability.CognitiveManager.Persistence.Repositories.Imp
{
    public class CognitiveFieldsRepository : RepositoryBase<CognitiveFieldsEntity>, ICognitiveFieldsRepository
    {
        public CognitiveFieldsRepository(CognitiveContext cognitiveContext) : base(cognitiveContext)
        {
        }
        public IEnumerable<CognitiveFieldsEntity> GetCognitiveFieldDetails(CognitiveFieldsRequestDto request)
        {
            IEnumerable<CognitiveFieldsEntity> entities = GetByCondition(x => x.FieldAssociationId == request.FieldAssociationId);

            if (!string.IsNullOrEmpty(request.Direction?.Trim()))
            {
                entities = entities.Where(x => x.Direction == request.Direction?.Trim());
            }
            if (!string.IsNullOrEmpty(request.FieldName?.Trim()))
            {
                entities = entities.Where(x => x.FieldName == request.FieldName?.Trim());
            }
            if (!string.IsNullOrEmpty(request.Status))
            {
                entities = entities.Where(x => x.Status == Convert.ToBoolean(request.Status?.Trim()));
            }
            return entities;
        }
    }
}
