import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhonebookModule } from './phonebook/phonebook.module';

@Module({
	imports: [
		//new database connection 
		MongooseModule.forRoot("mongodb+srv://dbGodfrey:godfrey123@cluster0.fcjwi.mongodb.net/phonebookDb?retryWrites=true&w=majority", { autoCreate: true }),
		PhonebookModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
