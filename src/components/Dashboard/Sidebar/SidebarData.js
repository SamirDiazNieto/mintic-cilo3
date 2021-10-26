import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
//import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
	{
		titulo: 'Inicio',
		ruta: '/dashboard',
		icono: <AiIcons.AiFillHome />,
	},
	{
		titulo: 'Productos',
		ruta: '/dashboard/lista-productos',
		icono: <FaIcons.FaShoppingCart />,
		// iconoCerrado: <RiIcons.RiArrowDownSFill />,
		// iconoAbierto: <RiIcons.RiArrowUpSFill />,
		// subNav: [
		// 	{
		// 		titulo: 'Registrar',
		// 		ruta: '/dashboard/productos/registrar',
		// 		icono: <AiIcons.AiOutlineAppstoreAdd />,
		// 	},
		// 	{
		// 		titulo: 'Listar',
		// 		ruta: '/dashboard/productos/listar',
		// 		icono: <FaIcons.FaListOl />,
		// 	},
		// 	{
		// 		titulo: 'Buscar',
		// 		ruta: '/dashboard/productos/buscar',
		// 		icono: <AiIcons.AiOutlineFileSearch />,
		// 	},
		// 	{
		// 		titulo: 'Actualizar',
		// 		ruta: '/dashboard/productos/actualizar',
		// 		icono: <FaIcons.FaEdit />,
		// 	},
		// ],
	},
	{
		titulo: 'Ventas',
		ruta: '/dashboard/lista-ventas',
		icono: <BsIcons.BsReceiptCutoff />,
		// iconoCerrado: <RiIcons.RiArrowDownSFill />,
		// iconoAbierto: <RiIcons.RiArrowUpSFill />,
		// subNav: [
		// 	{
		// 		titulo: 'Registrar',
		// 		ruta: '/dashboard/ventas/registrar',
		// 		icono: <AiIcons.AiOutlineAppstoreAdd />,
		// 	},
		// 	{
		// 		titulo: 'Listar',
		// 		ruta: '/dashboard/ventas/listar',
		// 		icono: <FaIcons.FaListOl />,
		// 	},
		// 	{
		// 		titulo: 'Buscar',
		// 		ruta: '/dashboard/ventas/buscar',
		// 		icono: <AiIcons.AiOutlineFileSearch />,
		// 	},
		// 	{
		// 		titulo: 'Actualizar',
		// 		ruta: '/dashboard/ventas/actualizar',
		// 		icono: <FaIcons.FaEdit />,
		// 	},
		// ],
	},
	{
		titulo: 'Usuarios',
		ruta: '/dashboard/lista-usuarios',
		icono: <FaIcons.FaUserCog />,
		// iconoCerrado: <RiIcons.RiArrowDownSFill />,
		// iconoAbierto: <RiIcons.RiArrowUpSFill />,
		// subNav: [
		// 	{
		// 		titulo: 'Listar',
		// 		ruta: '/dashboard/usuarios/listar',
		// 		icono: <FaIcons.FaListOl />,
		// 	},
		// 	{
		// 		titulo: 'Actualizar',
		// 		ruta: '/dashboard/usuarios/actualizar',
		// 		icono: <FaIcons.FaEdit />,
		// 	},
		// ],
	},
	{
		titulo: 'Soporte',
		ruta: '/dashboard/soporte',
		icono: <MdIcons.MdOutlineContactSupport />,
	},
];
