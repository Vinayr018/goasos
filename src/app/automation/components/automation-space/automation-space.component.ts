import { Component, OnDestroy } from '@angular/core';
import { Box, VideoBox } from '../../../common/models';
import { AutomationDataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
import { GoasosTitleService } from '../../../common/services/title.service';
import { MetaService } from '../../../common/services/meta.service';
import { SpaceHomes } from '../../models';

@Component({
  selector: 'app-automation-space',
  templateUrl: './automation-space.component.html',
  styleUrl: './automation-space.component.scss'
})
export class AutomationSpaceComponent {

  public homes: SpaceHomes[] = [
    { h3: 'Apartments and Flats', p: 'Maximize limited space in urban apartments across Bangalore, Bhubaneswar and Cuttack.' },
    { h3: 'Independent Houses', p: 'Create multi-purpose rooms in traditional homes, transforming guest rooms into home offices or children\'s rooms into study areas.' },
    { h3: 'Studio Living', p: 'Turn a single room into a functional space for working, entertaining, and sleeping with our comprehensive solutions.' },
    { h3: 'Growing Families', p: 'Adapt your existing home to accommodate new family members without the need for costly renovation or relocation.' },
  ];

  constructor(title: GoasosTitleService, meta: MetaService) {
    title.UpdateTitle = 'Space-Saving Furniture & Solutions | Bangalore, Bhubaneswar & Cuttack';
    meta.Description = 'Discover compact, modular, and multi-functional furniture for homes & offices in Bangalore, Bhubaneswar & Cuttack. Explore foldable beds, smart desks & innovative storage solutions. Upgrade your home today!';
    meta.Keywords = 'space automation, space automation in bangalore, space automation in indiranagar, space automation in bengaluru, space automation in bhubaneshwar, space automation in cuttack, , space automation in usa';
  }
}
