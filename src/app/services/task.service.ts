import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  taskGroups: any[] = [
    {
      title: "A faire",
      id: "todo",
      tasks: [
        {
          id: 0,
          title: "Première tache",
          description: "Voici ma première tache"
        },
        {
          id: 1,
          title: "Faire les courses",
          description: "Prendre du lait, des pates et du beurre"
        }
      ]
    },
    {
      title: "En cours",
      id: "inProgress",
      tasks: [
        {
          id: 0,
          title: "Faire une machine",
          description: "De blanc si possible"
        },
        {
          id: 1,
          title: "Etendre le linge",
          description: "Etendre le linge"
        },
        {
          id: 2,
          title: "Préparer à manger",
          description: "Un petit repas du soir OKLM"
        }
      ]
    },
    {
      title: "Terminé",
      id: "done",
      tasks: [
        {
          id: 0,
          title: "Mettre la table",
          description: "Ne pas oublier la fourchette"
        },
        {
          id: 1,
          title: "Faire les sols",
          description: "Balais serpière"
        }
      ]
    }
  ];
  
  taskGroupsSubject = new Subject<any[]>();

  constructor() { }

  emitTaskGroups() {
    this.taskGroupsSubject.next(this.taskGroups);
  }

}
