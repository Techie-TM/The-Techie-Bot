
const { Schema, model } = require("mongoose");

const guildSettingSchema = new Schema({
  gid: { type: String },
  prefix: { type: String, default: "!" }
});
module.exports = model("guild_settings", guildSettingSchema);