import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects : Project[] =[
    {
      urlimg: "../../../assets/img/imgproject.png",
      name: "Administrador de Creditos",
      company:"Contact Center Americas",
      language : "ASP.Net C# - JS - CSS - MS SqlServer (stored procedures)",
      description: "Web credit management system, where users can request a credit through the Crédito Facil Codensa program and pay it easily on your energy bill. ",
      role:"dev"
    },
    {
      urlimg: "../../../assets/img/imgproject.png",
      name: "OSAS",
      company:"Nexos Software",
      language : "ASP.Net C# - JS - CSS - EF -  WCF - Telerik - MS SqlServer | PMI",
      description: "Application to manage the approval flows necessary to grant rights over computer resources.",
      role:"mix"

    },
    {
      urlimg: "../../../assets/img/imgproject.png",
      name: "Sistema Integrado de Ventas",
      company:"Enel Codensa",
      language : "PMI - MS Project",
      description: "Project management for the implementation of an integrated microinsurance sales system and magazine subscription for the use of more than 500 sales consultants.",
      role:"pm"

    },
    {
      urlimg: "../../../assets/img/imgproject.png",
      name: "Portal Clientes",
      company:"Etna - Fabrica Nacional de Acumuladores",
      language : "ASP.Net C# - SOAP - REST - MSSqlServer (StoreProcedures) - SAP B1 SDK",
      description: "Portal web para que los distribuidores puedan realizar pedidos, colocar reclamos.",
      role:"dev"

    }
  ]

  constructor() { }

  getProjects(){
    return this.projects;
  }

}
    export interface Project{
      urlimg: string;
      name: string;
      company: string;
      language: string;
      description: string;
      role:string
    };
