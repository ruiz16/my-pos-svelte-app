// @ts-nocheck
import { persisted } from 'svelte-persisted-store'
export const userX = persisted('userInfo', { nombre: '', cod_empresa: '', email: '' });

