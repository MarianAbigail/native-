import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native';

const dragon = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

      <Image style={{ width: '20%', height: '20%', marginVertical: 5, alignContent: 'center' }}
       source={{
            uri: 'https://i.ibb.co/M9dvwMp/dragon.png',
        }}  
        />

        <Text style={styles.Titulos}>
        El dragón de Wawel

        </Text>

        <Text style={styles.text}>
        Según cuenta una leyenda polaca, hace muchos siglos, en las tierras gobernadas por el príncipe Krakus, 
        empezaron a suceder hechos muy extraños que nadie lograba comprender. Dice la historia que en sus dominios 
        había una colina conocida como la colina de Wawel.
      </Text>

        <Text style={styles.text}>
        Un día, sin saber por qué, comenzaron a faltar personas que vivían en los pueblos colindantes, 
        gente que de repente un día se esfumaba y de la que nunca jamás se volvía a saber nada. 
        Por si esto fuera poco, los pastores empezaron a notar también que, cada vez que hacían recuento de ovejas, en sus rebaños siempre faltaba alguna.

        </Text>

        <Text style={styles.text}>
        Los habitantes de la zona estaban desconcertados ¿Cómo era posible que personas y animales desaparecieran como si se los hubiese tragado la tierra? 
        Algo iba mal, pero nadie tenía ni idea de cómo solucionar el misterio.
        </Text>
       
        <Text style={styles.text}>
        Un día, un muchacho que paseaba por la colina, descubrió una enorme cueva tapada por unos matorrales. Asomó la cabeza y se quedó paralizado de miedo: 
        allí dentro dormía un dragón verde de piel brillante y tamaño descomunal .Tenía un aspecto que daba pavor y cada vez que roncaba, 
        las paredes de la cueva vibraban como si fueran de papel.
        </Text  >

        <Text style={styles.text} >
        Temblando como un flan salió pitando de allí y bajó al pueblo más cercano para avisar a todo el mundo. Después, fue al castillo para comunicárselo también al príncipe Krakus, 
        quien consciente de la terrible amenaza  que suponía el reptil alado, mandó a los soldados más valerosos de su ejército a luchar contra él.
        Un grupo enorme, armado hasta los dientes,  tomó rumbo a la colina con una única misión: ¡abatir al temible enemigo!  
        Pero el dragón, que ya estaba despierto, vio que el ejército se acercaba  e intuyó que iban a por él.
        </Text>
      

        <Text style={styles.text}>
        Muy airado, salió de su guarida, cogió aire y los expulsó de allí lanzando bocanadas de fuego por su enorme boca. 
        Los soldados salieron volando como muñecos de trapo, envueltos en una especie de huracán caliente y con el culo un poco chamuscado.
        Evidentemente, la operación resultó un fracaso. El dragón era demasiado fiero, demasiado fuerte y demasiado peligroso como para acercarse.

        </Text>

    <Text style={styles.text}>
    El príncipe Krakus, como último recurso, promulgó un bando real: quien consiguiera vencer al  monstruo, 
    se casaría con lo que él más quería: su dulce hija Wanda.

    </Text>

    <Text style={styles.text}>
    Una noticia de tal magnitud no tardó en extenderse como la pólvora y llegó a oídos de un joven y guapo zapatero. El muchacho, 
    que era muy humilde pero inteligente como el que más, decidió intentarlo y elaboró un plan infalible.

    </Text>

    <Text style={styles.text}>
    ¿Quieres saber qué hizo?… Consiguió la piel de un borrego, la rellenó con azufre y alquitrán, y por la noche, cuando el dragón dormía, 
    la colocó en la entrada de la caverna. En cuanto se despertó de su profundo sueño, el animal vio la falsa oveja, se relamió y la devoró con ansia.

    </Text>

    <Text style={styles.text}>
    La comió tan rápido y con tantas ganas, que al terminar sintió mucha sed y bajó al río Vístula a beber. El agua penetró a borbotones en su inmenso estómago, 
    y al entrar en contacto con el azufre y el alquitrán que se había zampado sin darse cuenta, la tripa le explotó en mil pedazos.

    </Text>

    <Text style={styles.text}>
    El zapatero fue aclamado como un auténtico héroe y recibió todos los honores posibles, aunque el mejor de todos los premios, fue casarse con la hermosa princesa Wanda. 
    Dicen que fueron muy, muy  felices, durante toda la vida.

    </Text>
     
    <Text style={styles.text}>
    Hoy en día, en Polonia,  existe una población en torno a la colina donde vivió, hace tantos siglos, el peligroso dragón. Está considerada una de las ciudades más importantes y bellas del país y se llama Cracovia, 
    en honor a uno de los protagonistas de esta historia: el príncipe Krakus.

    </Text>
    
    <Text style={styles.text}>
    Si algún día vas a visitarla, podrás comprobar cómo muchos de sus habitantes todavía recuerdan esta preciosa leyenda que sus abuelos les contaron cuando eran niños y que va pasando de generación en generación.

    </Text>

    <Text style={styles.text}>
    Fin.

    </Text>
    

    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: '#FA9487',
    marginHorizontal: 20,
    marginVertical: 5,
  },
  text: {
    fontSize: 25,
    color: '#EDD0F8',
    marginVertical: 10,
    
  },

  Titulos:{
    fontSize: 34,
    fontWeight: 'bold',
    color: '#F0ACEE',
    textAlign: 'center',

  },
});

export default dragon;