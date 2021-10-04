using GBC.Int.Lib.Core.Disability.CognitiveManager.Persistence.Entities.Dao;
using GBC.Int.Lib.Core.Disability.CognitiveManager.Service.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace GBC.Int.Lib.Core.Disability.CognitiveManager.Service
{
    public interface ICognitiveService
    {
        IEnumerable<CognitiveDatastoreEntity> GetCognitiveServerDetailEntities(CognitiveServerRequestDto request);
        public void InsertCognitiveServerDetails(CognitiveDatastoreEntity entity);
        void UpdateCognitiveServerDetials(CognitiveDatastoreEntity entity);
        void DeleteCognitiveServerDetails(int FieldId);
        IEnumerable<CognitiveFieldsEntity> GetCognitiveFieldEntities(CognitiveFieldsRequestDto request);
        public void InsertCognitiveField(CognitiveFieldsEntity entity);
        void UpdateCognitiveField(CognitiveFieldsEntity entity);
        void DeleteCognitiveField(int FieldId);
        IEnumerable<CognitiveEntity> GetCognitiveEntities(CognitiveRequestDto cognitiveRequest);
        void Insert(CognitiveEntity cognitiveEntity);
        void Update(CognitiveEntity cognitiveEntity);
        void Delete(string cognitiveId);
    }
}
