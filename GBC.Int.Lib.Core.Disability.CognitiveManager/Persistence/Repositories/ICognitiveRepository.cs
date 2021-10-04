using GBC.Int.Lib.Core.Disability.CognitiveManager.Persistence.Entities.Dao;
using GBC.Int.Lib.Core.Disability.CognitiveManager.Service.Dto;
using System.Collections.Generic;

namespace GBC.Int.Lib.Core.Disability.CognitiveManager.Persistence.Repositories
{
    public interface ICognitiveRepository : IRepositoryBase<CognitiveEntity>
    {
        IEnumerable<CognitiveEntity> GetCognitiveDetails(CognitiveRequestDto cognitiveRequest);
    }
}
