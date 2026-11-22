import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Pressable,
  StatusBar,
  StyleSheet,
} from "react-native";

const BLUE = "#0A4DA1";

const sections = [
  { id: "books", title: "المكتبة الإسلامية", icon: "📚" },
  { id: "audio", title: "المحاضرات الصوتية", icon: "🎧" },
  { id: "tv", title: "قناة TILAWA TV ZARMA", icon: "📺" },
  { id: "prayer", title: "مواقيت الصلاة", icon: "🕌" },
];

const books = [
  "الدعوة السلفية حقيقتها ومميزاتها",
  "علامات الساعة",
  "ابن صياد والمسيح الدجال",
];

const audios = [
  "الدورة العلمية في كوتونو – التسجيل الأول",
  "الدورة العلمية في كوتونو – التسجيل الثاني",
  "أشراط الساعة – تقديم أبي يحيى أسكندر يحيى ميغا",
  "قصة صافي بن صياد – تقديم أسكندر يحيى ميغا",
];

export default function App() {
  const [page, setPage] = useState("home");

  const getTitle = () => {
    const section = sections.find((item) => item.id === page);
    return section ? section.title : "الرئيسية";
  };

  const renderList = (items) => (
    <View>
      {items.map((item, index) => (
        <View style={styles.listItem} key={index}>
          <Text style={styles.itemNumber}>{index + 1}</Text>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </View>
  );

  const renderContent = () => {
    if (page === "books") return renderList(books);
    if (page === "audio") return renderList(audios);

    if (page === "tv") {
      return (
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>TILAWA TV ZARMA</Text>
          <Text style={styles.infoText}>
            القناة الرسمية للدروس والمحاضرات باللغة الزرما.
          </Text>
          <Text style={styles.infoText}>
            سيتم ربط مشغل الفيديو الداخلي بالقناة في المرحلة القادمة.
          </Text>
        </View>
      );
    }

    if (page === "prayer") {
      return (
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>مواقيت الصلاة</Text>
          <Text style={styles.infoText}>
            سيتم إضافة مواقيت الصلاة حسب المدينة، مع التنبيهات، في المرحلة القادمة.
          </Text>
        </View>
      );
    }

    return (
      <>
        <View style={styles.welcome}>
          <Text style={styles.welcomeTitle}>
            مرحبًا بك في التطبيق الإسلامي
          </Text>
          <Text style={styles.welcomeText}>
            مكتبة علمية ومحاضرات نافعة في مكان واحد
          </Text>
        </View>

        {sections.map((item) => (
          <Pressable
            key={item.id}
            style={({ pressed }) => [
              styles.sectionCard,
              pressed && styles.pressed,
            ]}
            onPress={() => setPage(item.id)}
          >
            <Text style={styles.sectionIcon}>{item.icon}</Text>
            <Text style={styles.sectionTitle}>{item.title}</Text>
            <Text style={styles.arrow}>‹</Text>
          </Pressable>
        ))}
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={BLUE} barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.appTitle}>
          الدعوة السلفية حقيقتها ومميزاتها
        </Text>
        <Text style={styles.author}>
          تأليف: أسكندر يحيى ميغا آل سعد
        </Text>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
      >
        {page !== "home" && (
          <Pressable
            style={styles.backButton}
            onPress={() => setPage("home")}
          >
            <Text style={styles.backText}>→ الرئيسية</Text>
          </Pressable>
        )}

        <Text style={styles.pageTitle}>
          {page === "home" ? "الأقسام الرئيسية" : getTitle()}
        </Text>

        {renderContent()}
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          تطبيق الدعوة السلفية
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F7FC",
  },
  header: {
    backgroundColor: BLUE,
    paddingVertical: 25,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  appTitle: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "bold",
    textAlign: "center",
    writingDirection: "rtl",
  },
  author: {
    color: "#E5EEFA",
    fontSize: 14,
    marginTop: 10,
    textAlign: "center",
    writingDirection: "rtl",
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 30,
  },
  pageTitle: {
    fontSize: 20,
    color: BLUE,
    fontWeight: "bold",
    textAlign: "right",
    marginBottom: 16,
    writingDirection: "rtl",
  },
  welcome: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 20,
    marginBottom: 18,
    borderRightWidth: 5,
    borderRightColor: BLUE,
  },
  welcomeTitle: {
    color: BLUE,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "right",
    writingDirection: "rtl",
  },
  welcomeText: {
    color: "#526174",
    fontSize: 14,
    marginTop: 8,
    textAlign: "right",
    writingDirection: "rtl",
  },
  sectionCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 18,
    marginBottom: 12,
    flexDirection: "row-reverse",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E1EAF5",
  },
  sectionIcon: {
    fontSize: 27,
    marginLeft: 14,
  },
  sectionTitle: {
    flex: 1,
    color: "#183B65",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
    writingDirection: "rtl",
  },
  arrow: {
    color: BLUE,
    fontSize: 25,
    marginLeft: 8,
  },
  pressed: {
    opacity: 0.7,
  },
  backButton: {
    alignSelf: "flex-end",
    backgroundColor: "#DCE9F8",
    paddingVertical: 9,
    paddingHorizontal: 15,
    borderRadius: 9,
    marginBottom: 18,
  },
  backText: {
    color: BLUE,
    fontWeight: "bold",
    fontSize: 14,
  },
  listItem: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 11,
    marginBottom: 10,
    flexDirection: "row-reverse",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E1EAF5",
  },
  itemNumber: {
    color: BLUE,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 12,
  },
  itemText: {
    flex: 1,
    color: "#183B65",
    fontSize: 15,
    textAlign: "right",
    writingDirection: "rtl",
  },
  infoCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E1EAF5",
  },
  infoTitle: {
    fontSize: 19,
    color: BLUE,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  infoText: {
    fontSize: 15,
    color: "#526174",
    textAlign: "right",
    lineHeight: 27,
    writingDirection: "rtl",
    marginBottom: 8,
  },
  footer: {
    backgroundColor: BLUE,
    padding: 13,
    alignItems: "center",
  },
  footerText: {
    color: "#FFFFFF",
    fontSize: 13,
  },
});
