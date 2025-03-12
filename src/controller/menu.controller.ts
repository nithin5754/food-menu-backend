import { Request, Response } from "express";
import MenuCategory from "../schema/menu.schema";
import seedMenus from "../utils/constant";
import { IMenuCategoryDetailsProps, IMenuItemsProps } from "../interface/menus.interface";

async function getAllMenus(req: Request,res: Response ) {
  try {
    let formattedCategories: IMenuCategoryDetailsProps[]|[]=[]
    const response = await MenuCategory.find();

    if(response&&response.length>0){
       formattedCategories = response.map(
        (category:any) => ({
          id: category._id.toString() as string, 
          name: category.name,
          description: category.description,
          items: category.items.map((item: any): IMenuItemsProps => ({
            id: item._id.toString(),
            name: item.name,
            description: item.description,
            price: item.price,
          })),
        })
      );
    }

    res.status(200).json({ message: "get menus list successfully ", data: formattedCategories });
  } catch (error: any) {
    console.log("Error :", error);
  }
}


async function seed(req: Request,res: Response ) {
  try {
    await MenuCategory.deleteMany();
    const response=await MenuCategory.insertMany(seedMenus);

    res.status(200).json({ message: "seed sample menus list created ", data: response });
  } catch (error: any) {
    console.log("Error :", error);
  }
}

export { getAllMenus,seed };
