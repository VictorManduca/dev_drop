import { response } from 'express'

export function sanitizeFilesResponse(files) {
  return files.map(file => sanitizeFileResponse(file.dataValues))
}

export function sanitizeFileResponse(file) {
  return {
    id: file.id,
    UsuarioID: file.UsuarioID,
    eFavorito: file.eFavorito,
    Nome: file.Nome,
    Arquivo: Buffer.from(file.Arquivo).toString('base64')
  }
}
