import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

type ButtonVariant = 'horizontal' | 'vertical';
type ButtonIcon = 'arrow-down' | 'chat' | null;

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.html',
  styleUrls: ['./button.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'horizontal';
  @Input() text = '';
  @Input() link: string | null = null;
  @Input() icon: ButtonIcon = null;
  @Input() ariaLabel = '';
  @Input() target: '_self' | '_blank' = '_self';

  get computedAriaLabel(): string {
    return this.ariaLabel || this.text || 'Button';
  }
}