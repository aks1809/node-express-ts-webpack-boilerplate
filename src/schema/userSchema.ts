import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

import { rolesEnum } from "@utils/enums";

const UsersSchema = pgTable("users", {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    fullName: varchar("full_name", { length: 256 }),
    email: varchar("email", { length: 100 }).unique().notNull(),
    phoneNumber: varchar("phone_number", { length: 10 }).unique().notNull(),
    password: varchar("password", { length: 100 }).notNull(),
    role: rolesEnum("role").default("user"),
    createdAt: timestamp("created_at").defaultNow(),
});

export default UsersSchema;