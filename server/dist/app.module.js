"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const recipes_module_1 = require("./recipes/recipes.module");
const mongoose_1 = require("@nestjs/mongoose");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const tools_module_1 = require("./tools/tools.module");
const ingredients_module_1 = require("./ingredients/ingredients.module");
const badges_module_1 = require("./badges/badges.module");
const menus_module_1 = require("./menus/menus.module");
const shopping_list_module_1 = require("./shopping-list/shopping-list.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot("mongodb+srv://receta2:factoriaf5@receta2.dykhykq.mongodb.net/recette-social"),
            recipes_module_1.RecipesModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            tools_module_1.ToolsModule,
            ingredients_module_1.IngredientsModule,
            shopping_list_module_1.ShoppingListModule,
            badges_module_1.BadgesModule,
            menus_module_1.MenusModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map