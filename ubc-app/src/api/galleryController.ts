
import * as aws from 'aws-sdk';
import { createConnection, getRepository, getConnectionManager, Repository } from 'typeorm';
import { Image } from '../entity/Image';
import { assert } from '../utils';
import { v4 as uuidv4 } from 'uuid';
import { Gallery } from '../entity/Gallery';
import { createList, createGet, createSave, createDelete } from './genericControllerFactory';

const typeFunc = () => Gallery;

export const listGallery = createList(typeFunc);

export const getGallery = createGet(typeFunc);
export const saveGallery = createSave(typeFunc);

export const deleteGallery = createDelete(typeFunc);