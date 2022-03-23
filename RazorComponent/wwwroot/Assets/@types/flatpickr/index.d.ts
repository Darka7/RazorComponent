export { }

declare global {
   

    export var flatpickr: Iflatpickr.FlatpickrFn;

     namespace flatpickr {
         export type Instance = Iflatpickr.Instance;
         export type CustomLocale = Iflatpickr.CustomLocale;
        export type Locale = Iflatpickr.Locale;

        export namespace Options {
            export type Options = Iflatpickr.Options;
            export type Hook = Iflatpickr.Hook;
            export type HookKey = Iflatpickr.HookKey;
            export type ParsedOptions = Iflatpickr.ParsedOptions;
            export type DateLimit = Iflatpickr.DateLimit;
            export type DateOption = Iflatpickr.DateOption;
            export type DateRangeLimit = Iflatpickr.DateRangeLimit;
            export type Plugin = Iflatpickr.Plugin;
            export type LocaleKey = Iflatpickr.key;
            
        }
    }

    
}