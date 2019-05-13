import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: ImagePickerComponent,
    multi: true
  }]
})
export class ImagePickerComponent implements ControlValueAccessor {
  dataUrl: string;

  private changeCallback: (dataUrl: string) => void = () => undefined;
  private touchedCallback: () => void = () => undefined;

  registerOnChange(callback: (dataUrl: string) => string): void {
    this.changeCallback = callback;
  }

  registerOnTouched(callback: () => string): void {
    this.touchedCallback = callback;
  }

  writeValue(dataUrl: string): void {
    this.dataUrl = dataUrl;
  }

  readDataUrl(event: Event): void {
    const file = (event.target as HTMLInputElement).files![0];
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      this.dataUrl = reader.result as string;
      this.changeCallback(this.dataUrl);
      this.touchedCallback();
    });
    reader.readAsDataURL(file);
  }
}
