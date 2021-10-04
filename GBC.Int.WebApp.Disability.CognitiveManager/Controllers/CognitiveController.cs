using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GBC.Int.Lib.Core.Disability.CognitiveManager.Persistence.Entities.Dao;
using GBC.Int.Lib.Core.Disability.CognitiveManager.Service;
using GBC.Int.Lib.Core.Disability.CognitiveManager.Service.Dto;
using GBC.Int.Lib.Core.Disability.CognitiveManager.Service.Imp;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GBC.Int.WebApp.Disability.CognitiveManager.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CognitiveController : ControllerBase
    {
        private readonly ICognitiveService cognitiveService;
        public CognitiveController(ICognitiveService cognitiveService)
        {
            this.cognitiveService = cognitiveService;
        }
        [HttpGet("CognitiveDetails")]
        public async Task<ActionResult<IEnumerable<CognitiveEntity>>> GetCognitivedetails(string CognitiveId,string PlatformId,string ContentType)
        {
            CognitiveRequestDto cognitiveRequest = new CognitiveRequestDto()
            {
                CognitiveServiceId = CognitiveId,
                ContentType = ContentType,
                Platform = PlatformId
            };
            IEnumerable<CognitiveEntity> response = await Task.Run(() => cognitiveService.GetCognitiveEntities(cognitiveRequest));
            return Ok(response);
        }
        [HttpPost("CognitiveDetails")]
        public async Task<ActionResult> PostCognitiveDetials(CognitiveEntity entity)
        {
            await Task.Run(() => cognitiveService.Insert(entity));
            return Created("", entity);
        }
        [HttpPut("CognitiveDetails")]
        public async Task<ActionResult> PutCognitiveDetials(CognitiveEntity entity)
        {
            await Task.Run(() => cognitiveService.Update(entity));
            return NoContent();
        }
        [HttpDelete("CognitiveDetails")]
        public async Task<ActionResult> RemoveCognitiveDetials(string CognitiveId)
        {
            await Task.Run(() => cognitiveService.Delete(CognitiveId));
            return Ok();
        }
    }
}