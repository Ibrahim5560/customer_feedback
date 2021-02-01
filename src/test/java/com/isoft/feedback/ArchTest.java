package com.isoft.feedback;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("com.isoft.feedback");

        noClasses()
            .that()
            .resideInAnyPackage("com.isoft.feedback.service..")
            .or()
            .resideInAnyPackage("com.isoft.feedback.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..com.isoft.feedback.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}
