import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native';

const mlago = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

    <Image style={{ width: '80%', height: '10%', marginVertical: 5, alignContent: 'center' }}
    source={{
            uri: 'https://i.ibb.co/72XL6Gk/ness.png',
        }}  
        />

      <Text style={styles.Titulos}>
      El monstruo del lago
        </Text >

        <Text style={styles.text}>
        Érase una vez una preciosa muchacha llamada Untombina, hija del rey de una tribu africana. 
        A unos kilómetros de su hogar había un lago muy famoso en toda la comarca porque en él se escondía un terrible monstruo que, 
        según se contaba, devoraba a todo aquel que merodeaba por allí.
        </Text >


        <Text style={styles.text}>
        Nadie, ni de día ni de noche, osaba acercarse a muchos metros a la redonda de ese lugar. Untombina, en cambio, valiente y curiosa por naturaleza, 
        estaba deseando conocer el aspecto de ese monstruo que tanto miedo daba a la gente.
        </Text>

        <Text style={styles.text}>
        Un año llegó el otoño y con él tantas lluvias, que toda la región se inundó. Muchos hogares se vinieron abajo y los cultivos fueron devorados por las aguas. 
        La joven Untombina pensó que quizá el monstruo tendría una solución a tanta desgracia y pidió permiso a sus padres para ir a hablar con él. Aterrorizados, 
        no sólo se negaron, sino que le prohibieron terminantemente que se alejara de la casa.

        </Text>

        <Text style={styles.text}>
        Pero no hubo manera; Utombina, además de valiente, era terca y decidida, así que reunió a todas las chicas del pueblo y juntas partieron en busca del monstruo. 
        La hija del rey dirigió la comitiva a paso rápido, y justo cuando el sol estaba más alto en el cielo, el grupo de muchachas llegó al lago.
        </Text>
        
        <Text style={styles.text}>
        En apariencia todo estaba muy tranquilo y el lugar les parecía encantador. Se respiraba aire puro y el agua transparente dejaba ver el fondo de piedras y arena blanca. 
        La caminata había sido dura y el calor intenso, así que nada les apetecía más que darse un buen chapuzón. Entre risas, se quitaron la ropa, las sandalias y las joyas, 
        y se tiraron de cabeza.  Durante un buen rato, nadaron, bucearon y jugaron a salpicarse unas a otras. Tan entretenidas estaban que no se dieron cuenta de que el monstruo, sigilosamente, 
        se había acercado a la orilla por otro lado y les había robado todas sus pertenencias.
        </Text  >

        <Text style={styles.text} >
        Cuando la primera de las muchachas salió del agua para vestirse, no encontró su ropa y avisó a todas las demás de lo que había sucedido.  
        Asutadísimas comenzaron a gritar y a preguntarse qué podían hacer ¡No podían volver desnudas al pueblo!
        </Text>
      

        <Text style={styles.text}>
        Se acercaron al lago y, en fila, comenzaron a llamar al monstruo. Entre llantos, le rogaron que les devolviera la ropa. Todas menos Utombina, 
        que como hija del rey, se negaba a humillarse y a suplicar nada de nada.

        </Text>


        <Text style={styles.text}>
        El monstruo escuchó las peticiones y, asomando la cabeza, comenzó a escupir prendas, anillos y pulseras, que las chicas recogieron rápidamente. 
        Devolvió todo lo que había robado excepto las cosas de la orgullosa Utombina. Las chicas querían volver, pero ella seguía negándose a implorar y se quedó inmóvil, 
        en la orilla, mirando al lago. Su actitud consiguió enfadar al monstruo que, en un arrebato de ira, salió inesperadamente del lago y de un bocado se la tragó.

        </Text>

        <Text style={styles.text}>
        Todas las jovencitas volvieron a chillar presas del pánico y corrieron al pueblo para contar al rey lo que había sucedido. Destrozado por la pena, decidió actuar: 
        reclutó a su ejército y lo envió al lago para acabar con el horrible ser que se había comido a su niña.

        </Text>

        <Text style={styles.text}>
        Cuando los soldados llegaron armados hasta los dientes, el monstruo  se dio cuenta de sus intenciones y se enfureció todavía más. 
        A manotazos, empezó a atrapar hombres de dos en dos y a comérselos sin darles tiempo a huir. Uno delgaducho y muy hábil se zafó de sus garras, 
        pero el monstruo le persiguió sin descanso hasta que, casualmente, llegó a la casa del rey. Para entonces, de tanto comer, 
        su cuerpo se había transformado en una bola descomunal que  parecía a punto de explotar.
        </Text>

        <Text style={styles.text}>
        El monarca, muy hábil con el manejo de las armas, sospechó que su hija y los soldados todavía podrían estar vivos dentro de la enorme barriga, 
        y sin dudarlo ni un segundo, comenzó a disparar flechas a su ombligo. Le hizo tantos agujeros que parecía un colador. Por el más grande, 
        fueron saliendo uno a uno todos los hombres que habían sido engullidos por la fiera. La última en aparecer ante sus ojos,  sana y salva, fue su preciosa hija

        </Text>

        <Text style={styles.text}>
        El malvado monstruo dejó de respirar y todos agradecieron a Utombina su valentía. Gracias a su orgullo y tozudez, habían conseguido acabar con él para siempre.

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
    backgroundColor: '#8D73A8',
    marginHorizontal: 20,
    marginVertical: 5,
  },
  text: {
    fontSize: 25,
    color: '#43045C',
    marginVertical: 10,
    
  },

  Titulos:{
    fontSize: 34,
    fontWeight: 'bold',
    color: '#382C5C',
    textAlign: 'center',

  },
});

export default mlago;