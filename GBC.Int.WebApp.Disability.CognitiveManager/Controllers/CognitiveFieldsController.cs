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
    public class CognitiveFieldsController : ControllerBase
    {
        private readonly ICognitiveService cognitiveService;
        public CognitiveFieldsController(ICognitiveService cognitiveService)
        {
            this.cognitiveService = cognitiveService;
        }
        [HttpGet("FieldDetails")]
        public async Task<ActionResult<IEnumerable<CognitiveFieldsEntity>>> GetCognitivedetails(string fieldAssociationId, string fieldName, string direction, string status)
        {
            CognitiveFieldsRequestDto request = new CognitiveFieldsRequestDto()
            {
                Direction = direction,
                FieldName = fieldName,
                Status = status == "0" || string.IsNullOrEmpty(status) ? null : "true",
                FieldAssociationId = fieldAssociationId
            };
            IEnumerable<CognitiveFieldsEntity> response = await Task.Run(() => cognitiveService.GetCognitiveFieldEntities(request));
            return Ok(response);
        }
        [HttpPost("FieldDetails")]
        public async Task<ActionResult> PostCognitiveDetials(CognitiveFieldsEntity entity)
        {
            await Task.Run(() => cognitiveService.InsertCognitiveField(entity));
            return Created("", entity);
        }
        [HttpPut("FieldDetails")]
        public async Task<ActionResult> PutCognitiveDetials(CognitiveFieldsEntity entity)
        {
            await Task.Run(() => cognitiveService.UpdateCognitiveField(entity));
            return NoContent();
        }
        [HttpDelete("FieldDetails")]
        public async Task<ActionResult> RemoveCognitiveDetials(int FieldId)
        {
            await Task.Run(() => cognitiveService.DeleteCognitiveField(FieldId));
            return Ok();
        }
    }
}