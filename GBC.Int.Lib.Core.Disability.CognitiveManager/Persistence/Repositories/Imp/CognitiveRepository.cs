using GBC.Int.Lib.Core.Disability.CognitiveManager.Persistence.Entities.Dao;
using GBC.Int.Lib.Core.Disability.CognitiveManager.Service.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Runtime.CompilerServices;
using System.Security.Cryptography.X509Certificates;

namespace GBC.Int.Lib.Core.Disability.CognitiveManager.Persistence.Repositories.Imp
{
    public class CognitiveRepository : RepositoryBase<CognitiveEntity>, ICognitiveRepository
    {
        public CognitiveRepository(CognitiveContext cognitiveContext) : base(cognitiveContext)
        {
        }
        public IEnumerable<CognitiveEntity> GetCognitiveDetails(CognitiveRequestDto cognitiveRequest)
        {
            IEnumerable<CognitiveEntity> cognitiveEntities = GetAll();
            if (!string.IsNullOrEmpty(cognitiveRequest.CognitiveServiceId?.Trim()))
            {
                cognitiveEntities = cognitiveEntities.Where(x => x.CognitiveServiceId == cognitiveRequest.CognitiveServiceId?.Trim());
            }
            if (!string.IsNullOrEmpty(cognitiveRequest.ContentType?.Trim()))
            {
                cognitiveEntities = cognitiveEntities.Where(x => x.ContentType == cognitiveRequest.ContentType?.Trim());
            }
            if (!string.IsNullOrEmpty(cognitiveRequest.Platform?.Trim()))
            {
                cognitiveEntities = cognitiveEntities.Where(x => x.PlatformId == Convert.ToInt32(cognitiveRequest.Platform?.Trim()));
            }
            return cognitiveEntities;
        }
    }
}
