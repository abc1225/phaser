export default class BaseLoader {
    events: any;
    baseURL: any;
    enableParallel: any;
    maxParallelDownloads: any;
    xhr: any;
    crossOrigin: any;
    list: any;
    inflight: any;
    failed: any;
    queue: any;
    storage: any;
    path: any;
    tag: any;
    protected _state: any;
    constructor();
    addFile(file: any): -1 | this;
    isLoading(): boolean;
    isReady(): boolean;
    start(): void;
    updateProgress(): void;
    processLoadQueue(): void;
    loadFile(file: any): void;
    nextFile(previousFile: any, success: any): void;
    finishedLoading(): void;
    processUpdate(file: any): void;
    removeFromQueue(file: any): void;
    processComplete(): void;
    protected processCallback(): void;
    reset(): void;
    destroy(): void;
}