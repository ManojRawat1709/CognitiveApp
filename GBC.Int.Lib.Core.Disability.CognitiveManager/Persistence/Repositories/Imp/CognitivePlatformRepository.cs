using GBC.Int.Lib.Core.Disability.CognitiveManager.Persistence.Entities.Dao;
using System;
using System.Collections.Generic;
using System.Text;

namespace GBC.Int.Lib.Core.Disability.CognitiveManager.Persistence.Repositories.Imp
{
    public class CognitivePlatformRepository : RepositoryBase<CognitivePlatformEntity>, ICognitivePlatformRepository
    {
        public CognitivePlatformRepository(CognitiveContext cognitiveContext) : base(cognitiveContext)
        {
        }
    }
}
