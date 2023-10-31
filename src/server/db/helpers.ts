import { createId } from '@paralleldrive/cuid2';
import { sql } from 'drizzle-orm';
import { int, text } from 'drizzle-orm/sqlite-core';

export function booleanGen<T extends string>(key: T) {
	return int(key, { mode: 'boolean' });
}

export function timestampGen<T extends string>(key: T) {
	return int(key, { mode: 'timestamp' });
}

export function createdAtGen() {
	return timestampGen('createdAt')
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull();
}

export function getDefaultTableData() {
    return {
        id: text('id')
            .$defaultFn(() => createId())
            .notNull()
            .primaryKey(),
        createdAt: createdAtGen(),
    }
}
