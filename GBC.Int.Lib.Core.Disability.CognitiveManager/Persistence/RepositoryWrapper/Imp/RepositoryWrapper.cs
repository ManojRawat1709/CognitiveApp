using GBC.Int.Lib.Core.Disability.CognitiveManager.Persistence.Repositories;
using GBC.Int.Lib.Core.Disability.CognitiveManager.Persistence.Repositories.Imp;
using System;
using System.Collections.Generic;
using System.Text;

namespace GBC.Int.Lib.Core.Disability.CognitiveManager.Persistence.RepositoryWrapper.Imp
{
    public class RepositoryWrapper : IRepositoryWrapper
    {
        private readonly CognitiveContext cognitiveContext;
        public RepositoryWrapper(CognitiveContext cognitiveContext)
        {
            this.cognitiveContext = cognitiveContext;
            Cognitive = new CognitiveRepository(cognitiveContext);
            CognitiveDatastore = new CognitiveDatastoreRepository(cognitiveContext);
            CognitiveFields = new CognitiveFieldsRepository(cognitiveContext);
            CognitivePlatform = new CognitivePlatformRepository(cognitiveContext);
        }
        public ICognitiveRepository Cognitive { get; private set; }

        public ICognitiveDatastoreRepository CognitiveDatastore { get; private set; }

        public ICognitiveFieldsRepository CognitiveFields { get; private set; }

        public ICognitivePlatformRepository CognitivePlatform { get; private set; }
        public void Completed()
        {
            cognitiveContext.SaveChanges();
        }

        public void Dispose()
        {
            cognitiveContext.Dispose();
        }

        //public ICognitiveRepository Cognitive
        //{
        //    get {
        //        if (cognitive == null)
        //        {
        //            cognitive = new CognitiveRepository(cognitiveContext);
        //        }
        //        return cognitive;
        //    }
        //}
        //public ICognitiveDatastoreRepository CognitiveDatastore
        //{
        //    get
        //    {
        //        if (cognitiveDatastore == null)
        //        {
        //            cognitiveDatastore = new CognitiveDatastoreRepository(cognitiveContext);
        //        }
        //        return cognitiveDatastore;
        //    }
        //}
        //public ICognitiveFieldsRepository CognitiveFields
        //{
        //    get
        //    {
        //        if (cognitiveFields == null)
        //        {
        //            cognitiveFields = new CognitiveFieldsRepository(cognitiveContext);
        //        }
        //        return cognitiveFields;
        //    }
        //}
        //public ICognitivePlatformRepository CognitivePlatform
        //{
        //    get
        //    {
        //        if (cognitivePlatform == null)
        //        {
        //            cognitivePlatform = new CognitivePlatformRepository(cognitiveContext);
        //        }
        //        return cognitivePlatform;
        //    }
        //}
    }
}
