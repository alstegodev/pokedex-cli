type CacheEntry<T> = {
    createdAt: number;
    value: T;
}

export class Cache {
    private cache = new Map<string, CacheEntry<any>>
    private reapIntervalId: NodeJS.Timeout | undefined = undefined;
    private readonly interval: number;

    constructor(interval: number) {
        this.interval = interval;
        this.startReapLoop();
    }

    add<T>(key: string, value: T) {
        console.log("ADD", key)
        this.cache.set(key, {createdAt: Date.now(), value})
    }

    get<T>(key: string): T | undefined {
        console.log("GET", key)
        return this.cache.get(key)?.value
    }

    stopReapLoop() {
        clearInterval(this.reapIntervalId)
        this.reapIntervalId = undefined;
    }

    private startReapLoop() {
        this.reapIntervalId = setInterval(() => {
            this.reap();
        }, this.interval)
    }

    private reap() {
        let currentTime = Date.now();
        let entriesToRemove: string[] = [];
        this.cache.forEach((entry, key) => {
            if (currentTime - entry.createdAt > this.interval) {
                entriesToRemove.push(key);
            }
        })

        for (const entry of entriesToRemove) {
            this.cache.delete(entry);
        }
    }
}