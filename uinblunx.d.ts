/**
 * UinBlunx.js
 * 
 * @copyright NriotHrreion 2020
 * @license MIT
 */

type UinModes = "media" | "speech";
type UinK = string;

interface UinSpeechConfig {
    /**
     * Grammar
     */
    grammar? : string
    /**
     * Continuous
     */
    continuous? : boolean
    /**
     * Interim Results
     */
    interimResults? : boolean
    /**
     * Language
     */
    lang? : string
}

interface UinConfig {
    /**
     * The mode of UinBlunx
     */
    mode : UinModes
    /**
     * The config of UinBlunx
     */
    conf : MediaStreamConstraints | UinSpeechConfig
}

interface UinClass {
    /**
     * Init UinBlunx
     * 
     * @method
     */
    init() : void

    /**
     * Load UinBlunx and get the result
     * 
     * @method
     * @example
     * var media = Uin({mode: "media", conf: {audio: true, video: true}});
     * // ...
     * media.load(function(result) {
     *   // ...
     * });
     */
    load(cb : (this : UinClass, result : any) => any) : void

    /**
     * Add the EventListener to UinBlunx (just for speech mode)
     * 
     * @method
     * @example
     * var media = Uin({mode: "media", conf: {audio: true, video: true}});
     * // ...
     * media.on("speechend", function(e) {
     *   // ...
     * });
     */
    on<UinK extends keyof SpeechRecognitionEventMap>(event : UinK, cb : (this : UinClass, ev : SpeechRecognitionEventMap[UinK]) => any) : void
}

/**
 * @author NriotHrreion
 * 
 * The constructor of UinBlunx.js
 * 
 * @constructor
 * @example
 * var media = Uin({mode: "media", conf: {audio: true, video: true}});
 */
declare function Uin(config : UinConfig) : UinClass;
