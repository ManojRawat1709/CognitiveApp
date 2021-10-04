using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GBC.Int.Lib.Core.Disability.CognitiveManager.Persistence.Entities.Dao;
using GBC.Int.Lib.Core.Disability.CognitiveManager.Service;
using GBC.Int.Lib.Core.Disability.CognitiveManager.Service.Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GBC.Int.WebApp.Disability.CognitiveManager.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CognitiveServerController : ControllerBase
    {
        private readonly ICognitiveService cognitiveService;
        public CognitiveServerController(ICognitiveService cognitiveService)
        {
            this.cognitiveService = cognitiveService;
        }
        [HttpGet("ServerDetails")]
        public async Task<ActionResult<IEnumerable<CognitiveDatastoreEntity>>> GetCognitiveServerDetails(string cognitiveId, string serverName, string databaseName, string methodName)
        {
            CognitiveServerRequestDto request = new CognitiveServerRequestDto()
            {
                CognitiveServiceId = cognitiveId,
                DatabaseName = databaseName,
                MethodName = methodName,
                ServerName = serverName
            };
            IEnumerable<CognitiveDatastoreEntity> response = await Task.Run(() => cognitiveService.GetCognitiveServerDetailEntities(request));
            return Ok(response);
        }
        [HttpPost("ServerDetails")]
        public async Task<ActionResult> PostCognitiveServerDetials(CognitiveDatastoreEntity entity)
        {
            await Task.Run(() => cognitiveService.InsertCognitiveServerDetails(entity));
            return Created("", entity);
        }
        [HttpPut("ServerDetails")]
        public async Task<ActionResult> PutCognitiveServerDetials(CognitiveDatastoreEntity entity)
        {
            await Task.Run(() => cognitiveService.UpdateCognitiveServerDetials(entity));
            return NoContent();
        }
        [HttpDelete("ServerDetails")]
        public async Task<ActionResult> RemoveCognitiveServerDetials(int Id)
        {
            await Task.Run(() => cognitiveService.DeleteCognitiveServerDetails(Id));
            return Ok();
        }
    }
}