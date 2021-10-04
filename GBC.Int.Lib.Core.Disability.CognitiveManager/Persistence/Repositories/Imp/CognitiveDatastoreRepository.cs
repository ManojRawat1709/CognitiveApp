using GBC.Int.Lib.Core.Disability.CognitiveManager.Persistence.Entities.Dao;
using GBC.Int.Lib.Core.Disability.CognitiveManager.Service.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace GBC.Int.Lib.Core.Disability.CognitiveManager.Persistence.Repositories.Imp
{
    public class CognitiveDatastoreRepository : RepositoryBase<CognitiveDatastoreEntity>, ICognitiveDatastoreRepository
    {
        public CognitiveDatastoreRepository(CognitiveContext cognitiveContext) :base(cognitiveContext)
        {
        }
        public IEnumerable<CognitiveDatastoreEntity> GetCognitiveServerdDetails(CognitiveServerRequestDto request)
        {
            IEnumerable<CognitiveDatastoreEntity> entities = GetByCondition(x => x.CognitiveServiceId == request.CognitiveServiceId);

            if (!string.IsNullOrEmpty(request.ServerName?.Trim()))
            {
                entities = entities.Where(x => x.ServerName == request.ServerName?.Trim());
            }
            if (!string.IsNullOrEmpty(request.MethodName?.Trim()))
            {
                entities = entities.Where(x => x.MethodName == request.MethodName?.Trim());
            }
            if (!string.IsNullOrEmpty(request.DatabaseName))
            {
                entities = entities.Where(x => x.DatabaseName == request.DatabaseName?.Trim());
            }
            return entities;
        }
    }
}
