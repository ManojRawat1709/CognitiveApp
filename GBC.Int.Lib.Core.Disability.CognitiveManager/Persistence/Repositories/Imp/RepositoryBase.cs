using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace GBC.Int.Lib.Core.Disability.CognitiveManager.Persistence.Repositories.Imp
{
    public class RepositoryBase<TEntity> : IRepositoryBase<TEntity> where TEntity : class
    {
        protected DbContext RepositoryContext { get; set; }
        public RepositoryBase(DbContext repositoryContext)
        {
            this.RepositoryContext = repositoryContext;
        }
        public TEntity GetById(int id)
        {
            return RepositoryContext.Set<TEntity>().Find(id);
        }
        public TEntity GetById(string id)
        {
            return RepositoryContext.Set<TEntity>().Find(id);
        }
        public IEnumerable<TEntity> GetAll()
        {
            return this.RepositoryContext.Set<TEntity>().AsNoTracking();
        }
        public virtual IEnumerable<TEntity> GetByMultipleConditions(List<Expression<Func<TEntity, bool>>> lstExpression)
        {
            IEnumerable<TEntity> entities = GetAll();
            foreach (var expression in lstExpression)
            {
                entities = this.RepositoryContext.Set<TEntity>().Where(expression);
            }
            return entities;
        }
        public virtual IEnumerable<TEntity> GetByCondition(Expression<Func<TEntity, bool>> expression)
        {
            return this.RepositoryContext.Set<TEntity>().Where(expression).AsNoTracking();
        }
        public void Add(TEntity entity)
        {
            RepositoryContext.Set<TEntity>().Add(entity);
        }
        public void AddRange(IEnumerable<TEntity> entities)
        {
            RepositoryContext.Set<TEntity>().AddRange(entities);
        }
        public void Remove(TEntity entity)
        {
            RepositoryContext.Set<TEntity>().Remove(entity);
        }
        public void RemoveRange(IEnumerable<TEntity> entities)
        {
            RepositoryContext.Set<TEntity>().RemoveRange(entities);
        }
        public void Update(TEntity entity)
        {
            this.RepositoryContext.Set<TEntity >().Update(entity);
        }
        public void UpdateRange(IEnumerable<TEntity> entities)
        {
            this.RepositoryContext.Set<TEntity>().UpdateRange(entities);
        }
    }
}
