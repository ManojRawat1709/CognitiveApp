using GBC.Int.Lib.Core.Disability.CognitiveManager.Persistence.Entities.Dao;
using GBC.Int.Lib.Core.Disability.CognitiveManager.Service.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace GBC.Int.Lib.Core.Disability.CognitiveManager.Persistence.Repositories
{
    public interface ICognitiveDatastoreRepository : IRepositoryBase<CognitiveDatastoreEntity>
    {
        IEnumerable<CognitiveDatastoreEntity> GetCognitiveServerdDetails(CognitiveServerRequestDto request);
    }
}
