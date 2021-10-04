using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace GBC.Int.Lib.Core.Disability.CognitiveManager.Persistence.Repositories
{
    public interface IRepositoryBase<TEntity>
    {
        TEntity GetById(int id);
        TEntity GetById(string id);
        IEnumerable<TEntity> GetAll();
        IEnumerable<TEntity> GetByCondition(Expression<Func<TEntity, bool>> expression);
        IEnumerable<TEntity> GetByMultipleConditions(List<Expression<Func<TEntity, bool>>> lstExpression);
        void Add(TEntity entity);
        void AddRange(IEnumerable<TEntity> entities);
        void Update(TEntity entity);
        void Remove(TEntity entity);
        void RemoveRange(IEnumerable<TEntity> entities);
    }
}
