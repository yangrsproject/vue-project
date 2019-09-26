import {get, post} from './http';

const sGetPhotoMsg = p => post('/small_api/login/sGetPhotoMsg', p);

const sQryLoginMsg = p => get('/small_api/login/qryLoginMsg', p);

const sUploadImg = p => post('/small_api/login/sUploadImg', p);

export {
	sGetPhotoMsg,
	sQryLoginMsg,
	sUploadImg
}