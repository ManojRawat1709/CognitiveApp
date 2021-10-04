using GBC.Int.Lib.Core.Disability.CognitiveManager.Persistence.Entities.Dao;
using GBC.Int.Lib.Core.Disability.CognitiveManager.Persistence.RepositoryWrapper;
using GBC.Int.Lib.Core.Disability.CognitiveManager.Service.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Security.Cryptography.X509Certificates;
using System.Text;

namespace GBC.Int.Lib.Core.Disability.CognitiveManager.Service.Imp
{
    public class CognitiveService : ICognitiveService
    {
        private readonly IRepositoryWrapper repository;
        public CognitiveService(IRepositoryWrapper repository)
        {
            this.repository = repository;
        }
        public IEnumerable<CognitiveDatastoreEntity> GetCognitiveServerDetailEntities(CognitiveServerRequestDto request)
        {
            IEnumerable<CognitiveDatastoreEntity> response = repository.CognitiveDatastore.GetCognitiveServerdDetails(request);
            return response;
        }

        public void InsertCognitiveServerDetails(CognitiveDatastoreEntity entity)
        {
            repository.CognitiveDatastore.Add(entity);
            repository.Completed();
        }

        public void UpdateCognitiveServerDetials(CognitiveDatastoreEntity entity)
        {
            repository.CognitiveDatastore.Update(entity);
            repository.Completed();
        }

        public void DeleteCognitiveServerDetails(int FieldId)
        {
            CognitiveDatastoreEntity entity = repository.CognitiveDatastore.GetById(FieldId);
            repository.CognitiveDatastore.Remove(entity);
            repository.Completed();
        }
        public IEnumerable<CognitiveFieldsEntity> GetCognitiveFieldEntities(CognitiveFieldsRequestDto request)
        {
            IEnumerable<CognitiveFieldsEntity> response = repository.CognitiveFields.GetCognitiveFieldDetails(request);
            return response;
        }
        public void InsertCognitiveField(CognitiveFieldsEntity entity)
        {
            repository.CognitiveFields.Add(entity);
            repository.Completed();
        }
        public void DeleteCognitiveField(int FieldId)
        {
            CognitiveFieldsEntity entity = repository.CognitiveFields.GetById(FieldId);
            repository.CognitiveFields.Remove(entity);
            repository.Completed();
        }
        public void UpdateCognitiveField(CognitiveFieldsEntity entity)
        {
            repository.CognitiveFields.Update(entity);
            repository.Completed();
        }
        public IEnumerable<CognitiveEntity> GetCognitiveEntities(CognitiveRequestDto cognitiveRequest)
        {
            //IEnumerable<CognitiveEntity> cognitiveEntities = repository.Cognitive.GetByCondition(x => 
            //(!string.IsNullOrEmpty(cognitiveRequest.CognitiveServiceId) && x.CognitiveServiceId == cognitiveRequest.CognitiveServiceId) && 
            //(!string.IsNullOrEmpty(cognitiveRequest.ContentType) && x.ContentType == cognitiveRequest.ContentType) &&
            //(!string.IsNullOrEmpty(cognitiveRequest.Platform) && x.PlatformId == Convert.ToInt32(cognitiveRequest.Platform)));

            IEnumerable<CognitiveEntity> cognitiveEntities = repository.Cognitive.GetCognitiveDetails(cognitiveRequest);
            return cognitiveEntities;
        }

        public void Insert(CognitiveEntity cognitiveEntity)
        {
            repository.Cognitive.Add(cognitiveEntity);
            repository.Completed();
        }
        public void Delete(string cognitiveId)
        {
            CognitiveEntity cognitiveEntity = repository.Cognitive.GetById(cognitiveId);
            repository.Cognitive.Remove(cognitiveEntity);
            repository.Completed();
        }
        public void Update(CognitiveEntity cognitiveEntity)
        {
            repository.Cognitive.Update(cognitiveEntity);
            repository.Completed();
        }
    }
}
