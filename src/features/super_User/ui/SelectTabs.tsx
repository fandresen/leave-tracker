import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { propsT } from "@/lib/interface";
import { ListeEntities } from "../presentation/ListeEntity";
import { ListeDemande } from "../presentation/Demande_offre";

export function SelectTabs ({handleChangeValue}: propsT) {
    return (
        <Tabs defaultValue="Liste" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="Liste">Liste</TabsTrigger>
                <TabsTrigger value="Ajout">Ajout</TabsTrigger>
                <TabsTrigger value="Demande">Demande</TabsTrigger>
                <TabsTrigger value="Historique">Historique</TabsTrigger>
            </TabsList>
            <TabsContent value="Liste"><ListeEntities/></TabsContent>
            <TabsContent value="Ajout">test2</TabsContent>
            <TabsContent value="Demande"><ListeDemande/></TabsContent>
            <TabsContent value="Historique">test3</TabsContent>
        </Tabs>
    )
}
  