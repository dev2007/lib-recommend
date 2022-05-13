# Spring Boot

## 简介

- [官方网站](https://spring.io/projects/spring-boot)

- [GitHub](https://github.com/spring-projects/spring-boot)

Spring Boot可以轻松创建独立的、生产级的、基于Spring的应用程序，您可以“直接运行”。

我们对Spring平台和第三方库持一种固执己见的观点，这样您就可以用最少的麻烦开始了。大多数Spring引导应用程序需要最少的Spring配置。

如果你想了解某个特定版本的信息，或者如何从早期版本升级的说明，请查看我们维基上的项目发布说明部分。

### 特性

- 创建独立的 Spring 应用程序
- 直接嵌入 Tomcat、Jetty 或 Undertow（无需部署 WAR 文件）
- 提供顽固的“初学者”依赖项，以简化构建配置
- 尽可能自动配置 Spring 和第三方库
- 提供生产准备功能，如指标、运行状况检查和外部化配置
- 绝对没有代码生成，也不需要XML配置

## 马上开始

### 项目构建

#### 1. 方法一

1. 通过官方项目配置网站 [](https://start.spring.io/) 填写配置信息，生成项目初始化代码并下载到本地。

<img :src="$withBase('/quick-img-1-12bfde9c5c280b1940d85dee3d81772d.png')" alt="cover">

2. 使用集成开发工具（如 `IDEA`），打开下载的项目代码，并进行修改。如下代码中，对 `DemoApplication.java` 进行修改，直接在 `DemoApplication` 中添加了一个叫作 `/hello` 的 API。

```java
package com.example.demo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DemoApplication {


    public static void main(String[] args) {
    SpringApplication.run(DemoApplication.class, args);
    }

    @GetMapping("/hello")
    public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
    return String.format("Hello %s!", name);
    }
  
}
```

3. 运行项目，依据不同的操作系统环境，执行以下命令，即可运行当前项目。

**MacOS/Linux：**

```bash
./mvnw spring-boot:run
```

**Windows：**

```bash
mvnw spring-boot:run
```

运行成功后，你将看到如下图的输出：

<img :src="$withBase('/quick-img2-ac5ae88c60ffaa062234a580f9f1abc3.png')" alt="cover">

然后在浏览器中访问：`http://localhost:8080/hello`,即可看到相应 API 的输出：

<img :src="$withBase('/quick-img3-afa0a1fe446db8e3c8c7a8d9ca532d23.png')" alt="cover">

#### 2. 方法2

使用集成开发工具（如 `IDEA`）新建项目工具 `Spring Initializr` 进行项目初始化，类似于方法1，唯一的区别只是方法1是在网站上初始化，下载项目代码。

#### 3. 方法3

使用集成开发工具（如 `IDEA`）新建 `Maven` / `Gradle` 项目，然后编辑相应的配置文件为 Spring Boot 项目。

以 Maven 项目为例，最终创建的配置文件 `pom.xml` 如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.6.7</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
	<groupId>com.example</groupId>
	<artifactId>demo</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>demo</name>
	<description>Demo project for Spring Boot</description>
	<properties>
		<java.version>1.8</java.version>
	</properties>
	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-devtools</artifactId>
			<scope>runtime</scope>
			<optional>true</optional>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
	</dependencies>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
		</plugins>
	</build>

</project>
```

`<parent>` 节点标明当前使用的父项目为 `org.springframework.boot`:`spring-boot-starter-parent`:`2.6.7`。父项目管理相关的依赖项及版本，这方便我们在后面的 `<dependency>` 节点中不用再显示的标明 Spring Boot 相关依赖的版本 `2.6.7`。

如果不使用 `<parent>` 也可以，只是需要将所有 Spring Boot 相应的依赖显示标明版本，如下：

```xml
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
			<version>2.6.7</version>
		</dependency>
```

`<plugins>` 中的 `org.springframework.boot`:`spring-boot-maven-plugin` 会带上 Spring Boot 相关的 Maven 插件。

## 组件说明

- [Maven 中央仓库](https://search.maven.org/search?q=org.springframework.boot)

- [MVN Repository](https://mvnrepository.com/search?q=org.springframework.boot)
