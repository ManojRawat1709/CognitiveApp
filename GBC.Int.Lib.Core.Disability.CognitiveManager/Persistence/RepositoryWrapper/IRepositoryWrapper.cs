using GBC.Int.Lib.Core.Disability.CognitiveManager.Persistence.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace GBC.Int.Lib.Core.Disability.CognitiveManager.Persistence.RepositoryWrapper
{
    public interface IRepositoryWrapper : IDisposable
    {
        ICognitiveRepository Cognitive { get; }
        ICognitiveDatastoreRepository CognitiveDatastore { get; }
        ICognitiveFieldsRepository CognitiveFields { get; }
        ICognitivePlatformRepository CognitivePlatform { get; }
        void Completed();
    }
}
